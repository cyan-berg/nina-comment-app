import { render } from "@testing-library/vue";
import PatientDummy from "./PatientDummy.vue";

describe("PatientDummy.vue", () => {
  it("renders image and image alt", () => {
    const { queryByAltText, getByRole } = render(PatientDummy);
    queryByAltText("human body");
    const img = getByRole("img");
    expect(img.src).toEqual("http://localhost/@/assets/patient-dummy.png");
  });
});
