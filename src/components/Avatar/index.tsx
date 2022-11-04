import './styles.css'

interface IAvatar {
  src: string;
  hasBorder?: boolean;
}

export function Avatar({ src, hasBorder = true }: IAvatar) {
  return (
    <>
      {!!hasBorder ? <img className='hasBorder' src={src} /> : <img className='avatar' src={src} />}
    </>
  )
}