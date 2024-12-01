export const Adapter = (props: { isMobile?: boolean }) => {
  const { isMobile } = props

  return <div className={isMobile ? 'active' : ''}></div>
}
