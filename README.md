# demo-integration-layer  

現在は仮の設定。  
src/externals/manageExternals  
にて外部コンポーネントの管理を行う。

## eslintについて  

node_modules/@typescript-eslint/parser/parser.jsにてtraverser1をrequireしているpathを
`eslint/lib/shared/traverser"`  
に修正すると動きます。  

eslint6.0.0から出てるバグ？っぽい。なんとかならないか考え中。  
