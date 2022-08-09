import { fireEvent, render } from "@testing-library/vue";
import EntrySection from "./EntrySection.vue";

describe("EntrySection.vue", () => {
  it("accepts user input", async () => {
    const { findByTestId, findByText, getByRole } = render(EntrySection);
    const textArea = findByTestId("textarea");
    await fireEvent.update(
      textArea,
      "It feels like an electric eel bit a chunk out of it."
    );
    const submitButton = getByRole("button", { name: "Submit" });
    await fireEvent.click(submitButton);
    expect(
      await findByText("It feels like an electric eel bit a chunk out of it.")
    ).toBeVisible();
  });
});
