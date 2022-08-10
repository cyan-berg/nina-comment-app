import { fireEvent, render } from "@testing-library/vue";
import EntrySection from "./EntrySection.vue";

describe("EntrySection.vue", () => {
  it("accepts user input", async () => {
    const { findByTestId, getByText } = render(EntrySection);
    const textArea = await findByTestId("textarea");
    fireEvent.update(
      textArea,
      "It feels like an electric eel bit a chunk out of it."
    );
    expect(textArea.value).toBe(
      "It feels like an electric eel bit a chunk out of it."
    );
    const submitButton = await findByTestId("submitbutton");
    await fireEvent.click(submitButton);
    getByText("It feels like an electric eel bit a chunk out of it.");
  });
});
