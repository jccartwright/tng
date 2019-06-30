import FooterViewModel from "../../../../src/widgets/Footer/FooterViewModel";

const { beforeEach, suite, test } = intern.getInterface("tdd");
const { assert } = intern.getPlugin("chai");

suite("widgets/Footer/FooterViewModel", () => {
  let vm: FooterViewModel;

  beforeEach(() => {
    vm = new FooterViewModel();
  });

  test("validate that name is correct", () => {
    assert.equal(vm.name, "Slagathor");
  });
});
