import SidebarViewModel from "../../../../src/widgets/Sidebar/SidebarViewModel";

const { beforeEach, suite, test } = intern.getInterface("tdd");
const { assert } = intern.getPlugin("chai");

suite("widgets/Sidebar/SidebarViewModel", () => {
  let vm: SidebarViewModel;

  beforeEach(() => {
    vm = new SidebarViewModel();
  });

  test("validate that name is correct", () => {
    assert.equal(vm.name, "Slagathor");
  });
});
