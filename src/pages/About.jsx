// TODO 6: props를 받아서 장바구니 목록을 렌더링하세요
//         - cart: 장바구니에 담긴 과일 배열
//         - onRemoveFromCart: 장바구니 제거 함수
const About = ({ cart, onRemoveFromCart }) => {
  if (cart.length === 0)
    return (
      <div>
        <p>장바구니가 비어있습니다!</p>
      </div>
    );
  return (
    <div style={{ padding: "20px" }}>
      <h2>장바구니</h2>
      {/* TODO: cart 배열을 map으로 순회하며 장바구니 아이템을 렌더링하세요 */}
      {/* 각 아이템에는 이모지, 이름, 가격, "제거" 버튼이 있어야 합니다 */}
      {/* 장바구니가 비어있으면 "장바구니가 비어있습니다" 메시지를 보여주세요 */}
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {cart.map((fruit) => {
          return (
            <div
              style={{
                border: "1px solid black",
                borderRadius: 10,
                padding: "10px",
                width: "100px",
              }}
            >
              <p>
                {fruit.emoji} {fruit.name}
              </p>
              <p>{fruit.price.toLocaleString()}원</p>
              <button
                onClick={() => {
                  onRemoveFromCart(fruit.id);
                }}
              >
                제거
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
