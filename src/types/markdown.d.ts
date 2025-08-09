// 마크다운 파일을 문자열로 import할 수 있도록 하는 타입 정의
declare module '*.md?raw' {
  const content: string;
  export default content;
}

declare module '*.md' {
  const content: string;
  export default content;
}
