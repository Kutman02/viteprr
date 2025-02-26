function Error() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        color: 'white',
      }}>
      <h1 style={{ fontSize: '6rem', margin: '0' }}>404</h1>
      <p style={{ fontSize: '1.5rem' }}>Страница не найдена</p>
    </div>
  );
}

export default Error;
