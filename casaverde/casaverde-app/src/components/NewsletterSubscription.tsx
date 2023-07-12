export function NewsletterSubscription() {
  return (
    <section>
      <div>
        {" "}
        {/* Texts wrapper */}
        <h3>Sua casa com as</h3>
        <h1>melhores plantas</h1>
        <p>
          Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
          torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail
          e assine nossa newsletter para saber das novidades da marca.
        </p>
      </div>
      <div>
        <form>
          <input type="email" placeholder="Insira seu e-mail" />
          <button>Assinar newsletter </button>
        </form>
      </div>
    </section>
  );
}
