// 생성기 함수
// 값을 반환하는데 함수가 종료되지 않기도 하고 종료되기도 함 (선택가능)
// 영원히 종료되지않게 또는 몇번의 반환을 거친후에 종료 등 
// 무한루트같이 특수한 코드가 가능하다.
// 기존의 함수 상태 그대로 유지 

function makeInfiniteEnergyGenerator() {
  let energy = 0;
  return function (booster = 0) {
    if (booster) {
      energy += booster
    } else {
      energy++;
    }
    return energy;
  }
}

const energy = makeInfiniteEnergyGenerator();

for (let i = 0; i < 5; i++) {
  console.log(energy());
}
console.log(energy(5));




// 제너레이터 (생성기 함수)
function* infiniteEnergyGenerator() {
  let energy = 1;
  while (true) { // 무한 루프
    const booster = yield energy;
    // yield 제너레이터 멈추는 키워드
    if (booster) {
      energy += booster
    } else {
      energy++;
    }
  }
  // return 을 하면 제너레이터 함수 종료 (done: true)
}

const energyGenerator = infiniteEnergyGenerator(); // 첫번째 호출때 실행안함 (실행시킬 객체를 만듬)

for (let i = 0; i < 5; i++) {
  console.log(energyGenerator.next());
  //next() -> 재개하는 메소드
}
console.log(energyGenerator.next(5)); // {value: 10, done: false}