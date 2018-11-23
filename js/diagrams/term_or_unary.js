ComplexDiagram(
  Choice(0,
    NonTerminal('term', {href: '#term'}),
    Sequence(
      OneOrMore(NonTerminal('linking_word', {href: '#linking_word'})),
      NonTerminal('term', {href: '#term'}),
      ZeroOrMore(NonTerminal('linking_word', {href: '#linking_word'}))
    ),
    Sequence(
      ZeroOrMore(NonTerminal('linking_word', {href: '#linking_word'})),
      NonTerminal('term', {href: '#term'}),
      OneOrMore(NonTerminal('linking_word', {href: '#linking_word'}))
    )
  )
).addTo();
