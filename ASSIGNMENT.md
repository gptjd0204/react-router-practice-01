# 과제: 과일 가게 장바구니 만들기

## 목표

`react-router-dom`의 `Link`를 활용한 페이지 이동과, **최상위 컴포넌트(App)에서 선언한 state를 여러 페이지에 props로 전달**하는 방법을 익힙니다.

## 완성 화면

| 페이지 | 경로 | 설명 |
|--------|------|------|
| 과일 목록 | `/` | 전체 과일을 보여주고, "장바구니 담기" 버튼으로 추가 |
| 장바구니 | `/about` | 장바구니에 담긴 과일을 보여주고, "제거" 버튼으로 삭제 |
| 주문 요약 | `/contact` | 장바구니의 총 개수와 총 가격을 보여줌 |

> 세 페이지 모두 **동일한 장바구니(cart) state**를 사용합니다.
> 과일 목록에서 담은 과일이 장바구니 페이지와 주문 요약 페이지에 바로 반영되어야 합니다.

---

## 이미 준비된 것 (건드리지 않아도 됩니다)

- `main.jsx`: `BrowserRouter` 설정
- `App.jsx`: 라우터 설정 (`Routes`, `Route`, `Link`), 과일 데이터 (`FRUITS`)
- `App.css` / `index.css`: 기본 스타일 (`.fruit-card`, `.btn-add`, `.btn-remove`, `.empty-message`, `.summary-box`)

---

## 해야 할 일 (TODO 순서대로)

### TODO 1 — `App.jsx`: useState로 장바구니 state 선언

```jsx
// 파일 최상단에 useState를 import하세요
import { useState } from "react";

// App 컴포넌트 안에서 state를 선언하세요
const [cart, setCart] = useState([]);
```

### TODO 2 — `App.jsx`: addToCart 함수 만들기

- `fruit` 객체를 파라미터로 받습니다.
- 이미 장바구니에 있는 과일이면 추가하지 않습니다. (`id`로 비교)
- **힌트**: `some()` 또는 `find()`로 중복 체크 후 `setCart([...cart, fruit])`

### TODO 3 — `App.jsx`: removeFromCart 함수 만들기

- `fruitId`를 파라미터로 받습니다.
- `filter()`를 사용하여 해당 id의 과일을 제거합니다.

### TODO 4 — `App.jsx`: 각 페이지에 props 전달하기

Route의 `element`에서 컴포넌트에 props를 전달하세요.

```jsx
<Route path="/" element={<Home fruits={???} onAddToCart={???} />} />
<Route path="/about" element={<About cart={???} onRemoveFromCart={???} />} />
<Route path="/contact" element={<Contact cart={???} />} />
```

### TODO 5 — `pages/Home.jsx`: 과일 목록 렌더링

- `fruits`와 `onAddToCart`를 props로 받습니다.
- `fruits.map()`으로 과일 카드를 렌더링합니다.
- 각 카드에는 이모지, 이름, 가격, "장바구니 담기" 버튼이 있어야 합니다.

**예시 구조:**
```jsx
<div className="fruit-card" key={fruit.id}>
  <span>{fruit.emoji} {fruit.name} — {fruit.price}원</span>
  <button className="btn-add" onClick={() => onAddToCart(fruit)}>
    장바구니 담기
  </button>
</div>
```

### TODO 6 — `pages/About.jsx`: 장바구니 렌더링

- `cart`와 `onRemoveFromCart`를 props로 받습니다.
- `cart`가 비어있으면 `<p className="empty-message">장바구니가 비어있습니다</p>`를 보여줍니다.
- `cart.map()`으로 장바구니 아이템을 렌더링합니다.
- 각 아이템에 "제거" 버튼(`className="btn-remove"`)을 추가합니다.

### TODO 7 — `pages/Contact.jsx`: 주문 요약 렌더링

- `cart`를 props로 받습니다.
- 장바구니가 비어있으면 `<p className="empty-message">장바구니에 담긴 상품이 없습니다</p>`를 보여줍니다.
- 비어있지 않으면 다음 정보를 보여줍니다:
  - 총 상품 수: `cart.length`
  - 총 가격: `reduce()`를 사용하여 계산
- **힌트**: `cart.reduce((sum, fruit) => sum + fruit.price, 0)`

**예시 구조:**
```jsx
<div className="summary-box">
  <p>총 상품 수: {cart.length}개</p>
  <p>총 가격: {총가격}원</p>
</div>
```

---

## 핵심 개념 정리

```
App (useState로 cart 선언)
 ├── Home   ← fruits, addToCart를 props로 전달
 ├── About  ← cart, removeFromCart를 props로 전달
 └── Contact ← cart를 props로 전달
```

- **state 끌어올리기 (Lifting State Up)**: 여러 페이지에서 공유할 데이터는 공통 부모(App)에서 관리합니다.
- **props 전달**: Route의 `element`에서 `<Component prop={value} />` 형태로 전달합니다.
- **Link 컴포넌트**: `<a>` 태그 대신 `<Link to="/">`를 사용하면 페이지 새로고침 없이 이동합니다.

---

## 실행 방법

```bash
npm run dev
```

## 체크리스트

- [ ] 과일 목록 페이지에서 "장바구니 담기" 버튼을 누르면 장바구니에 추가된다
- [ ] 같은 과일을 두 번 누르면 중복 추가되지 않는다
- [ ] 장바구니 페이지로 이동하면 담은 과일이 보인다
- [ ] 장바구니에서 "제거" 버튼을 누르면 해당 과일이 사라진다
- [ ] 주문 요약 페이지에서 총 개수와 총 가격이 정확하게 표시된다
- [ ] 장바구니가 비어있을 때 적절한 안내 메시지가 표시된다
