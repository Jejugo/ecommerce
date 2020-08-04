import EmailTokenValidation from '../../hoc/EmailTokenValidation'

const VerifiedAccountText = () => {
  return (
    <>
      <p style={{ textAlign: 'center', textWeight: 200, fontSize: 30 }}>
        {' '}
        Sua conta foi verificada com sucesso!
      </p>
      <p style={{ textAlign: 'center', fontSize: 20 }}>
        {' '}
        Realize o login para fazer as compras que deseja. Boas compras!
      </p>
    </>
  )
}

export default EmailTokenValidation(VerifiedAccountText)
