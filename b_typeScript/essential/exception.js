// 오류 처리

function doException() {
  throw new Error('에러입니다.');
}

function noException() {
  return true;
}

function callException(type) {
  if (type == 'do') {
    doException();
  } else {
    noException()
  }
}
function main() {
  try {
    callException('do');
    // noException();
    // doException();
  } catch (e) {
    console.log(e);
  } finally {
    console.log('done');
  }
}

main();