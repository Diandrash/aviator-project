const Home = () => {

  const credentialValue = process.env.NEXT_PUBLIC_CREDENTIAL_VALUE ?? "Not Set"

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold">
        Credential Value is : {credentialValue}
      </h1>
    </div>
  )
}

export default Home
