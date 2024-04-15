const LembreteEntrada = () => {
  return (
    <div>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Digite seu novo lembrete"
      />
      <button
        type="button"
        className="btn btn-primary btn-block w-100"
      >
        OK
      </button>
    </div>
  );
}

export default LembreteEntrada;
