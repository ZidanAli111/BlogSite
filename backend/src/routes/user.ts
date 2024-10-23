import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { signinInput, signupInput } from 'blogsite-commom';
import { Hono } from 'hono';
import { sign } from 'hono/jwt';

// Create the main Hono app
export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string,
  },
	Variables : {
		userId: string
	}
}>();

userRouter.post('/signup', async (c) => {
  const body = await c.req.json();
  const { success } = signupInput.safeParse(body);

  if (!success) {
    c.status(411);
    console.log("Validation failed:", signupInput.safeParse(body).error); // Log validation errors
    return c.json({
      message: "Inputs are not correct"
    });
  }

  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());


  try {
    const user = await prisma.user.create({
      data: {
        username: body.username,
        password: body.password
      }
    });
    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ jwt });
  } catch (e) {
    console.error("Prisma error:", e); // Log detailed error information
    c.status(403);
    return c.json({ error: "error while signing up" });
  }
})


userRouter.post('/signin', async (c) => {
  const body = await c.req.json();
  console.log("Received signin body:", body); // Log the received body

  const { success, error } = signinInput.safeParse(body);
  if (!success) {
      c.status(411);
      console.log("Validation failed:", error); // Log validation errors
      return c.json({
          message: "Inputs not correct"
      });
  }

  const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
      const user = await prisma.user.findUnique({
          where: {
              username: body.username, // Use username as the unique identifier
          }
      });

      // Log user information for debugging
      console.log("User found:", user);

      if (!user) {
          c.status(403);
          return c.json({ error: "User not found" });
      }

      // Directly compare the password (not secure, but for your case, we assume plain text)
      if (user.password !== body.password) {
          c.status(403);
          return c.json({ error: "Invalid password" });
      }

      const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
      return c.json({
          message: "User signed in successfully",
          jwt: jwt
      });
  } catch (e) {
      console.error("Prisma error:", e); // Log detailed error information
      c.status(403);
      return c.json({ error: "Error while signing in" });
  }
});
