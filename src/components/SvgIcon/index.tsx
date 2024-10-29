type SizeType = number | string
type IProps = {
  /** 文件的名字，需要加上子路径，如 dir-filename */
  name: string
  /** 如果 size 没设置，则默认为1em，
   * 如果设置了一个值，则同时为 height 和 width
   * 如果是一个2个数字的数组，则第一个为width，第二个为height
   */
  size?: SizeType | [SizeType, SizeType]
  /** 颜色，默认为 currentColor */
  color?: string
} & React.HTMLAttributes<HTMLDivElement>
export default function SvgIcon({
  name,
  size = '1em',
  color = 'currentColor',
  ...restProps
}: IProps) {
  let [w, h]: SizeType[] = ['1em', '1em']
  if (Array.isArray(size)) {
    w = size[0]
    h = size[1]
  } else {
    w = h = size
  }
  // 实验发现，浏览器会自动给number加上px，不需要我们写
  // if (typeof w === 'number') {
  //   w = w + 'px'
  // }
  // if (typeof h === 'number') {
  //   h = h + 'px'
  // }
  return (
    <div {...restProps} style={{ color }}>
      <svg
        aria-hidden='true'
        style={{
          display: 'inline-block',
          verticalAlign: 'middle',
          width: w,
          height: h,
        }}
      >
        <use xlinkHref={`#icon-${name}`} />
      </svg>
    </div>
  )
}
