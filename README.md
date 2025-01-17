# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

design pattern: \*\*\*\*
Trong project này tôi muốn sử dụng stateless component và sử dụng tính chất hoisting để đảm bảo dữ liệu chỉ nằm ở 1 đầu
hoặc có thể sử dụng trong các style code
exampl code stateless component ( hoisting state )
<!-- useEffect(() => {
  const cars = getData(); //this fuctional function calls an API
  setCars(cars);
}, []);

return (
  <div>
    <CarHeader cars />
    <CarList cars />
  </div>
); -->

  + Sử dụng proxy component để đảm bảo các component được tạo từ đầu ( cha ) có thể tái sử dụng.
  + Sủ dụng hooks để tách các logic sử lý nghiệp vụ ra khỏi UI
  + Và viết các Higher-Order Function/Component để tái sử dụng các function hooks hoặc function utils
  + Có thể bắt đầu với các thư mục shared - chứa tất cả các thành phần sử dụng chung cho project ( component/ assets/ constants/ utils/ ...)
  + Sử dụng APi nên có 1 thư mục core hoặc api, service , ... trong này có thể tách ra theo graphql hoặc resfull
  + Vì muốn tách UI riêng nên có 1 thư mục chưa UI - trong này sẽ có các page ( html, css) / sections / layouts/....
  + Với project sử dụng đã ngôn ngữ sẽ có thêm 1 thư mục lang ( optional )
  + single page application không thể thiếu thư mục router
