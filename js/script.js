const unitOptions = ["millimeter", "centimeter", "meter", "kilometer", "inch", "foot", "yard", "mile"];

const unitFrom = document.querySelector("#unitFrom");
const unitTo = document.querySelector("#unitTo");

// 当 unitFrom 变化时，触发 initTo 函数更新 unitTo 的选项
unitFrom.addEventListener("change", initTo);

initFrom();  // 初始化 unitFrom 下拉框
initTo();    // 初始化 unitTo 下拉框

// 初始化 unitFrom 下拉菜单
function initFrom() {
    for (let optionName of unitOptions) {
        let option = document.createElement("option");
        option.value = optionName;
        option.text = optionName;
        unitFrom.add(option);
    }
}

// 根据 unitFrom 的选择来更新 unitTo 下拉菜单
function initTo() {
    // 先清空 unitTo 中的所有选项
    unitTo.innerHTML = "";

    // 获取 unitFrom 的当前选择值
    const selectedValue = unitFrom.value;

    // 为 unitTo 添加所有不等于 selectedValue 的选项
    for (let optionName of unitOptions) {
        if (optionName !== selectedValue) {
            let option = document.createElement("option");
            option.value = optionName;
            option.text = optionName;
            unitTo.add(option);
        }
    }
}
