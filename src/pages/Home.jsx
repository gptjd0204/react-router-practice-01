// TODO 5: props를 받아서 과일 목록을 렌더링하세요
//         - fruits: 전체 과일 배열
//         - onAddToCart: 장바구니 추가 함수
const Home = ({ fruits, onAddToCart }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>과일 목록</h2>
      {/* TODO: fruits 배열을 map으로 순회하며 과일 카드를 렌더링하세요 */}
      {/* 각 카드에는 이모지, 이름, 가격, "장바구니 담기" 버튼이 있어야 합니다 */}
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {fruits.map((fruit) => {
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
                  onAddToCart(fruit);
                }}
              >
                장바구니 담기
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
