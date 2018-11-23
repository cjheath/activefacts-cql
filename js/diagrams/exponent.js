ComplexDiagram(
  Sequence(
    '[Ee]',
    Choice(1, '-', Skip(), '+'),
    OneOrMore('[0-9]')
  )
).addTo();
