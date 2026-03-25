// TODO 7: props를 받아서 주문 요약을 렌더링하세요
//         - cart: 장바구니에 담긴 과일 배열
const Contact = ({ cart }) => {
  if (cart.length === 0)
    return (
      <div>
        <p>장바구니에 담긴 상품이 없습니다!</p>
      </div>
    );

  const totalPrice = () => {
    return cart.reduce((acc, cur) => acc + cur.price, 0);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>주문 요약</h2>
      {/* TODO: 장바구니에 담긴 과일의 총 개수와 총 가격을 보여주세요 */}
      {/* 장바구니가 비어있으면 "장바구니에 담긴 상품이 없습니다" 메시지를 보여주세요 */}
      <div>
        <h3>
          총 개수 : <span>{cart.length}개</span>
        </h3>
        <h3>
          총 가격 :{" "}
          <span style={{ color: "red" }}>
            {totalPrice().toLocaleString()}원
          </span>
        </h3>
      </div>
    </div>
  );
};

export default Contact;
