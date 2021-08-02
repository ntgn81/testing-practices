export function Sum(props: { a: string; b: string }) {
  const aNum = parseInt(props.a);
  const bNum = parseInt(props.b);
  return <b data-testid="sum">{aNum + bNum}</b>;
}
