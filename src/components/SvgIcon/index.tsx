type IProps = {
  /** 文件的名字，需要加上子路径，如 dir-filename */
  name: string
  /** 如果width和height都没有，则默认为1em，
   * 如果有width，则height默认为width，
   * 如果同时设置了width和height，则为设置的值
   */
  width?: number | string
  height?: number | string
  /** 颜色，默认为 currentColor */
  color?: string
} & React.HTMLAttributes<HTMLDivElement>
export default function SvgIcon({
  name,
  width = '1em',
  height = width,
  color = 'currentColor',
  ...restProps
}: IProps) {
  return (
    <div {...restProps} style={{ color }}>
      <svg
        aria-hidden='true'
        style={{
          display: 'inline-block',
          verticalAlign: 'middle',
          width: width,
          height: height,
        }}
      >
        <use xlinkHref={`#icon-${name}`} />
      </svg>
    </div>
  )
}
