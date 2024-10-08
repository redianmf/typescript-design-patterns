export default function resultWrapper(title: string, fn: Function): void {
  console.log('\n');
  console.log(`===== ${title} =====`);
  fn();
  console.log(`===== ${title} =====`);
  console.log('\n');
}
