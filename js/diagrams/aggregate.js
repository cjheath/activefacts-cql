ComplexDiagram(
  Sequence(
    NonTerminal('aggregate_operation', {href: '#aggregate_operation'}),
    'of',
    NonTerminal('term_or_unary', {href: '#term_or_unary'}),
    'in', '(',
    NonTerminal('qualified_clauses', {href: '#qualified_clauses'}),
    ')'
  )
).addTo();
