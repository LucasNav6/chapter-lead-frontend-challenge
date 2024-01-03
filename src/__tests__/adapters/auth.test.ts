import signInWithEmail from "@Adapters/auth/signInWithEmail.adapter";

jest.mock("@Services/auth/signInWithEmail.service", () => jest.fn().mockResolvedValue("SUCCESS"));

describe("ADAPTER: signInWithEmail", () => {
  it("should sign in with email successfully", async () => {
    const result = await signInWithEmail("test@example.com", "password123");
    expect(result).toEqual("SUCCESS");
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
});
