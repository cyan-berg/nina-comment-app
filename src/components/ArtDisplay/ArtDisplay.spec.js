import { render } from "@testing-library/vue";
import ArtDisplay from "./ArtDisplay.vue";

describe("ArtDisplay.vue", () => {
  it("renders title and image (including alt)", () => {
    const { getByText, queryByAltText, getByRole } = render(ArtDisplay);
    getByText("Title");
    queryByAltText("Title");
    const img = getByRole("img");
    expect(img.src).toEqual("http://localhost/@/assets/stinkthereforeiam.jpg");
    console.log(img.src);
  });
});
