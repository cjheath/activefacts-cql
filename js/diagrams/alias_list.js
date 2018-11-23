ComplexDiagram(
  ZeroOrMore(
    Sequence(
      ',', 'alias', NonTerminal('term', {href: '#term'}), 'as', NonTerminal('term', {href: '#term'})
      /* REVISIT: Aliasing for fact type readings */
    )
  )
).addTo();
