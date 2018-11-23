ComplexDiagram(
  Sequence(
    'import',
    NonTerminal('schema_name', {href: '#schema_name'}),
    /* REVISIT: define 'import_role', */
    Optional(NonTerminal('version_pattern', {href: '#version_pattern'})),
    NonTerminal('alias_list', {href: '#alias_list'}),
    ';'
  )
).addTo();
