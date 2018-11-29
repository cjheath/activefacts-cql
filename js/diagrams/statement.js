ComplexDiagram(
  Choice(0,
    NonTerminal('subset_constraint', {href: '#subset_constraint'}),
    NonTerminal('equality_constraint', {href: '#equality_constraint'}),
    NonTerminal('set_constraint', {href: '#set_constraint'}),
    NonTerminal('presence_constraint', {href: '#presence_constraint'})
    NonTerminal('unit_definition', {href: '#unit_definition'}),
    NonTerminal('object_type', {href: '#object_type'}),
    NonTerminal('fact_type', {href: '#fact_type'}),
    NonTerminal('informal_description', {href: '#informal_description'}),
    NonTerminal('query', {href: '#query'}),
    /* REVISIT: Define transform_rule */
    NonTerminal('transform_rule', {href: '#transform_rule'}),
    /* REVISIT: Define empty_statement */
    NonTerminal('empty_statement', {href: '#empty_statement'})
  )
).addTo();
