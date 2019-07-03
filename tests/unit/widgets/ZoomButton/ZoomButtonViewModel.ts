import ZoomButtonViewModel from "../../../../../src/app/widgets/ZoomButton/ZoomButtonViewModel";

const { beforeEach, suite, test } = intern.getInterface("tdd");
const { assert } = intern.getPlugin("chai");

suite("app/widgets/ZoomButton/ZoomButtonViewModel", () => {
  let vm: ZoomButtonViewModel;

  beforeEach(() => {
    vm = new ZoomButtonViewModel();
  });

  test("validate that name is correct", () => {
    assert.equal(vm.name, "Slagathor");
  });
});
