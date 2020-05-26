module.exports = {
  parser: "babel-eslint",
  plugins: [
    "react-hooks"
  ],
  rules: {
    "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
    "react-hooks/exhaustive-deps": "error" // 检查 effect 的依赖
  }
};
