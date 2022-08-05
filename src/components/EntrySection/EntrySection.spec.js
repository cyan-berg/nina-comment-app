import { fireEvent, render } from "@testing-library/vue";
import EntrySection from "./EntrySection.vue";

describe("EntrySection.vue", () => {
  it("accepts user input", () => {
    // user clicks into input field. user writes text. user clicks enter or clicks submit. a textsubmit thing happens. the user input is recorded. the user sees "submission complete" in the viewport.

    const { getByRole } = render(EntrySection);
    const textArea = getByRole("textarea");
    textArea.click();
    fireEvent.update(
      textArea,
      "It feels like an electric eel bit a chunk out of it."
    );
    // here is where the user submits
    // here the API call is made that will store the user input.
    // lastly the success message is shown.
    // expect().toBe("It feels like an electric eel bit a chunk out of it.")
    // console.log();
  });
});
