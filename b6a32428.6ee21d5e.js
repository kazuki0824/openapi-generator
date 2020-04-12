(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{243:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return s}));var a=t(1),o=t(9),r=(t(0),t(302)),i={id:"customization",title:"Customization"},l={id:"customization",title:"Customization",description:"## Custom Generator (and Template)",source:"@site/../docs/customization.md",permalink:"/docs/customization",editUrl:"https://github.com/OpenAPITools/openapi-generator/edit/master/website/../docs/customization.md",lastUpdatedBy:"William Cheng",lastUpdatedAt:1585880046,sidebar:"docs",previous:{title:"Using Templates",permalink:"/docs/templating"},next:{title:"Debugging",permalink:"/docs/debugging"}},p=[{value:"Custom Generator (and Template)",id:"custom-generator-and-template",children:[{value:"Use your new generator with the CLI",id:"use-your-new-generator-with-the-cli",children:[]},{value:"Use your new generator with the maven plugin",id:"use-your-new-generator-with-the-maven-plugin",children:[]}]},{value:"Selective generation",id:"selective-generation",children:[]},{value:"Ignore file format",id:"ignore-file-format",children:[]},{value:"Customizing the generator",id:"customizing-the-generator",children:[]},{value:"Bringing your own models",id:"bringing-your-own-models",children:[]}],c={rightToc:p};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"custom-generator-and-template"},"Custom Generator (and Template)"),Object(r.b)("a",{id:"creating-a-new-template"})," If none of the built-in generators suit your needs and you need to do more than just modify the mustache templates to tweak generated code, you can create a brand new generator and its associated templates. OpenAPI Generator can help with this, using the `meta` command:",Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"java -jar modules/openapi-generator-cli/target/openapi-generator-cli.jar meta \\\n  -o out/generators/my-codegen -n my-codegen -p com.my.company.codegen\n")),Object(r.b)("p",null,"This will create a new directory ",Object(r.b)("inlineCode",{parentName:"p"},"out/generators/my-codegen"),", with all the files you need to get started - including a ",Object(r.b)("inlineCode",{parentName:"p"},"README.md"),". Once modified and compiled, you can use your new codegen just like any other, with your own custom-rolled logic."),Object(r.b)("p",null,"These names can be anything you like. If you are building a client for the whitespace language, maybe  you'd use the options ",Object(r.b)("inlineCode",{parentName:"p"},"-o out/generators/whitespace -n whitespace"),". They can be the same, or different, it doesn't matter. The ",Object(r.b)("inlineCode",{parentName:"p"},"-n")," value will be become the template name."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"NOTE")," Convention is to use kebab casing for names passed to ",Object(r.b)("inlineCode",{parentName:"p"},"-n"),". Example, ",Object(r.b)("inlineCode",{parentName:"p"},"scala-finatra")," would become ",Object(r.b)("inlineCode",{parentName:"p"},"ScalaFinatraGenerator"),"."),Object(r.b)("h3",{id:"use-your-new-generator-with-the-cli"},"Use your new generator with the CLI"),Object(r.b)("p",null,"To compile your library, enter the ",Object(r.b)("inlineCode",{parentName:"p"},"out/generators/my-codegen")," directory, run ",Object(r.b)("inlineCode",{parentName:"p"},"mvn package")," and execute the generator:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"java -cp out/generators/my-codegen/target/my-codegen-openapi-generator-1.0.0.jar:modules/openapi-generator-cli/target/openapi-generator-cli.jar org.openapitools.codegen.OpenAPIGenerator\n")),Object(r.b)("p",null,"For Windows users, you will need to use ",Object(r.b)("inlineCode",{parentName:"p"},";")," instead of ",Object(r.b)("inlineCode",{parentName:"p"},":")," in the classpath, e.g."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"java -cp out/generators/my-codegen/target/my-codegen-openapi-generator-1.0.0.jar;modules/openapi-generator-cli/target/openapi-generator-cli.jar org.openapitools.codegen.OpenAPIGenerator\n")),Object(r.b)("p",null,"Note the ",Object(r.b)("inlineCode",{parentName:"p"},"my-codegen")," is an option for ",Object(r.b)("inlineCode",{parentName:"p"},"-g")," now, and you can use the usual arguments for generating your code:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"java -cp out/codegens/customCodegen/target/my-codegen-openapi-generator-1.0.0.jar:modules/openapi-generator-cli/target/openapi-generator-cli.jar \\\n  org.openapitools.codegen.OpenAPIGenerator generate -g my-codegen \\\n  -i https://raw.githubusercontent.com/openapitools/openapi-generator/master/modules/openapi-generator/src/test/resources/2_0/petstore.yaml \\\n  -o ./out/myClient\n")),Object(r.b)("p",null,"For Windows users:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"java -cp out/codegens/customCodegen/target/my-codegen-openapi-generator-1.0.0.jar;modules/openapi-generator-cli/target/openapi-generator-cli.jar \\\n  org.openapitools.codegen.OpenAPIGenerator generate -g my-codegen \\\n  -i https://raw.githubusercontent.com/openapitools/openapi-generator/master/modules/openapi-generator/src/test/resources/2_0/petstore.yaml \\\n  -o ./out/myClient\n")),Object(r.b)("h3",{id:"use-your-new-generator-with-the-maven-plugin"},"Use your new generator with the maven plugin"),Object(r.b)("p",null,"Install your library to your local maven repository by running:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"mvn clean install -f out/generators/my-codegen\n")),Object(r.b)("p",null,"This will install ",Object(r.b)("inlineCode",{parentName:"p"},"org.openapitools:my-codegen-openapi-generator:1.0.0")," to your local maven repository."),Object(r.b)("p",null,"You can use this as additional dependency of the ",Object(r.b)("inlineCode",{parentName:"p"},"openapi-generator-maven-plugin")," plugin and use ",Object(r.b)("inlineCode",{parentName:"p"},"my-codegen")," as ",Object(r.b)("inlineCode",{parentName:"p"},"generatorName")," value:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),"<plugin>\n  <groupId>org.openapitools</groupId>\n  <artifactId>openapi-generator-maven-plugin</artifactId>\n  <version>${openapi-generator-version}</version>\n  <executions>\n    <execution>\n      <id>generate-client-code</id>\n      <goals>\n        <goal>generate</goal>\n      </goals>\n      <configuration>\n        <generatorName>my-codegen</generatorName>\n        \x3c!-- other configuration ... --\x3e\n      </configuration>\n    </execution>\n  </executions>\n  <dependencies>\n    <dependency>\n      <groupId>org.openapitools</groupId>\n      <artifactId>my-codegen-openapi-generator</artifactId>\n      <version>1.0.0</version>\n    </dependency>\n  </dependencies>\n</plugin>\n")),Object(r.b)("p",null,"If you publish your artifact to a distant maven repository, do not forget to add this repository as ",Object(r.b)("inlineCode",{parentName:"p"},"pluginRepository")," for your project."),Object(r.b)("h2",{id:"selective-generation"},"Selective generation"),Object(r.b)("p",null,"You may not want to generate ",Object(r.b)("em",{parentName:"p"},"all")," models in your project.  Likewise you may want just one or two apis to be written.  If that's the case, you can use system properties to control the output:"),Object(r.b)("p",null,"The default is generate ",Object(r.b)("em",{parentName:"p"},"everything")," supported by the specific library.  Once you enable a feature, it will restrict the contents generated:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# generate only models\njava -Dmodels {opts}\n\n# generate only apis\njava -Dapis {opts}\n\n# generate only supporting files\njava -DsupportingFiles\n\n# generate models and supporting files\njava -Dmodels -DsupportingFiles\n")),Object(r.b)("p",null,"To control the specific files being generated, you can pass a CSV list of what you want:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# generate the User and Pet models only\n-Dmodels=User,Pet\n\n# generate the User model and the supportingFile `StringUtil.java`:\n-Dmodels=User -DsupportingFiles=StringUtil.java\n")),Object(r.b)("p",null,"To control generation of docs and tests for api and models, pass false to the option. For api, these options are  ",Object(r.b)("inlineCode",{parentName:"p"},"-DapiTests=false")," and ",Object(r.b)("inlineCode",{parentName:"p"},"-DapiDocs=false"),". For models, ",Object(r.b)("inlineCode",{parentName:"p"},"-DmodelTests=false")," and ",Object(r.b)("inlineCode",{parentName:"p"},"-DmodelDocs=false"),".\nThese options default to true and don't limit the generation of the feature options listed above (like ",Object(r.b)("inlineCode",{parentName:"p"},"-Dapi"),"):"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# generate only models (with tests and documentation)\njava -Dmodels {opts}\n\n# generate only models (with tests but no documentation)\njava -Dmodels -DmodelDocs=false {opts}\n\n# generate only User and Pet models (no tests and no documentation)\njava -Dmodels=User,Pet -DmodelTests=false {opts}\n\n# generate only apis (without tests)\njava -Dapis -DapiTests=false {opts}\n\n# generate only apis (modelTests option is ignored)\njava -Dapis -DmodelTests=false {opts}\n")),Object(r.b)("p",null,"When using selective generation, ",Object(r.b)("em",{parentName:"p"},"only")," the templates needed for the specific generation will be used."),Object(r.b)("p",null,'To skip models defined as the form parameters in "requestBody", please use ',Object(r.b)("inlineCode",{parentName:"p"},"skipFormModel")," (default to false) (this option is introduced at v3.2.2)"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"java -DskipFormModel=true\n")),Object(r.b)("p",null,"This option will be helpful to skip model generation due to the form parameter, which is defined differently in OAS3 as there's no form parameter in OAS3"),Object(r.b)("h2",{id:"ignore-file-format"},"Ignore file format"),Object(r.b)("p",null,"OpenAPI Generator supports a ",Object(r.b)("inlineCode",{parentName:"p"},".openapi-generator-ignore")," file, similar to ",Object(r.b)("inlineCode",{parentName:"p"},".gitignore")," or ",Object(r.b)("inlineCode",{parentName:"p"},".dockerignore")," you're probably already familiar with."),Object(r.b)("p",null,"The ignore file allows for better control over overwriting existing files than the ",Object(r.b)("inlineCode",{parentName:"p"},"--skip-overwrite")," flag. With the ignore file, you can specify individual files or directories can be ignored. This can be useful, for example if you only want a subset of the generated code."),Object(r.b)("p",null,"Examples:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# OpenAPI Generator Ignore\n# Lines beginning with a # are comments\n\n# This should match build.sh located anywhere.\nbuild.sh\n\n# Matches build.sh in the root\n/build.sh\n\n# Exclude all recursively\ndocs/**\n\n# Explicitly allow files excluded by other rules\n!docs/UserApi.md\n\n# Recursively exclude directories named Api\n# You can't negate files below this directory.\nsrc/**/Api/\n\n# When this file is nested under /Api (excluded above),\n# this rule is ignored because parent directory is excluded by previous rule.\n!src/**/PetApiTests.cs\n\n# Exclude a single, nested file explicitly\nsrc/Org.OpenAPITools.Test/Model/AnimalFarmTests.cs\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},".openapi-generator-ignore")," file must exist in the root of the output directory."),Object(r.b)("p",null,"Upon first code generation, you may also pass the CLI option ",Object(r.b)("inlineCode",{parentName:"p"},"--ignore-file-override=/path/to/ignore_file")," for greater control over generated outputs. Note that this is a complete override, and will override the ",Object(r.b)("inlineCode",{parentName:"p"},".openapi-generator-ignore")," file in an output directory when regenerating code."),Object(r.b)("p",null,"Editor support for ",Object(r.b)("inlineCode",{parentName:"p"},".openapi-generator-ignore")," files is available in IntelliJ via the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://plugins.jetbrains.com/plugin/7495--ignore"}),".ignore plugin"),"."),Object(r.b)("h2",{id:"customizing-the-generator"},"Customizing the generator"),Object(r.b)("p",null,"There are different aspects of customizing the code generator beyond just creating or modifying templates.  Each language has a supporting configuration file to handle different type mappings, etc:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ ls -1 modules/openapi-generator/src/main/java/org/openapitools/codegen/languages/\nAbstractJavaJAXRSServerCodegen.java\nAbstractTypeScriptClientCodegen.java\n... (results omitted)\nTypeScriptAngularClientCodegen.java\nTypeScriptNodeClientCodegen.java\n")),Object(r.b)("p",null,"Each of these files creates reasonable defaults so you can get running quickly.  But if you want to configure package names, prefixes, model folders, etc. you can use a json config file to pass the values."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"java -jar modules/openapi-generator-cli/target/openapi-generator-cli.jar generate \\\n  -i https://raw.githubusercontent.com/openapitools/openapi-generator/master/modules/openapi-generator/src/test/resources/2_0/petstore.yaml \\\n  -g java \\\n  -o samples/client/petstore/java \\\n  -c path/to/config.json\n")),Object(r.b)("p",null,"and ",Object(r.b)("inlineCode",{parentName:"p"},"config.json")," contains the following as an example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "apiPackage" : "petstore"\n}\n')),Object(r.b)("p",null,"You can use also ",Object(r.b)("inlineCode",{parentName:"p"},"config.yml")," with following equivalent example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'apiPackage: "petstore"\n')),Object(r.b)("p",null,"Supported config options can be different per language. Running ",Object(r.b)("inlineCode",{parentName:"p"},"config-help -g {lang}")," will show available options.\n",Object(r.b)("strong",{parentName:"p"},"These options are applied via configuration file (e.g. config.json or config.yml) or by passing them with ",Object(r.b)("inlineCode",{parentName:"strong"},"-p {optionName}={optionValue}")),". (If ",Object(r.b)("inlineCode",{parentName:"p"},"-p {optionName}")," does not work, please open a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/openapitools/openapi-generator/issues/new"}),"ticket")," and we'll look into it)"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"java -jar modules/openapi-generator-cli/target/openapi-generator-cli.jar config-help -g java\n")),Object(r.b)("p",null,"Output"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"CONFIG OPTIONS\n    modelPackage\n        package for generated models\n\n    apiPackage\n        package for generated api classes\n...... (results omitted)\n    library\n        library template (sub-template) to use:\n        jersey1 - HTTP client: Jersey client 1.18. JSON processing: Jackson 2.4.2\n        jersey2 - HTTP client: Jersey client 2.6\n        feign - HTTP client: Netflix Feign 8.1.1.  JSON processing: Jackson 2.6.3\n        okhttp-gson (default) - HTTP client: OkHttp 2.4.0. JSON processing: Gson 2.3.1\n        retrofit - HTTP client: OkHttp 2.4.0. JSON processing: Gson 2.3.1 (Retrofit 1.9.0)\n        retrofit2 - HTTP client: OkHttp 2.5.0. JSON processing: Gson 2.4 (Retrofit 2.0.0-beta2)\n        google-api-client - HTTP client: google-api-client 1.23.0. JSON processing: Jackson 2.8.9\n        rest-assured - HTTP client: rest-assured : 4.0.0. JSON processing: Gson 2.8.5. Only for Java8\n")),Object(r.b)("p",null,"Your config file for Java can look like"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "groupId":"com.my.company",\n  "artifactId":"MyClient",\n  "artifactVersion":"1.2.0",\n  "library":"feign"\n}\n')),Object(r.b)("p",null,"Or if you preffer yaml format it can look like"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'groupId: "com.my.company"\nartifactId: "MyClient"\nartifactVersion: "1.2.0"\nlibrary: "feign"\n')),Object(r.b)("p",null,"For all the unspecified options default values will be used."),Object(r.b)("p",null,"Another way to override default options is to extend the config class for the specific language.\nTo change, for example, the prefix for the Objective-C generated files, simply subclass the ",Object(r.b)("inlineCode",{parentName:"p"},"ObjcClientCodegen.java"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'package com.mycompany.openapitools.codegen;\n\nimport org.openapitools.codegen.languages.*;\n\npublic class MyObjcCodegen extends ObjcClientCodegen {\n    static {\n        PREFIX = "HELO";\n    }\n}\n')),Object(r.b)("p",null,"and specify the ",Object(r.b)("inlineCode",{parentName:"p"},"classname")," when running the generator:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"-g com.mycompany.openapitools.codegen.MyObjcCodegen\n")),Object(r.b)("p",null,"Your subclass will now be loaded and overrides the ",Object(r.b)("inlineCode",{parentName:"p"},"PREFIX")," value in the superclass."),Object(r.b)("h2",{id:"bringing-your-own-models"},"Bringing your own models"),Object(r.b)("p",null,"Sometimes you don't want a model generated.  In this case, you can simply specify an import mapping to tell\nthe codegen what ",Object(r.b)("em",{parentName:"p"},"not")," to create.  When doing this, every location that references a specific model will\nrefer back to your classes.  Note, this may not apply to all languages..."),Object(r.b)("p",null,"To specify an import mapping, use the ",Object(r.b)("inlineCode",{parentName:"p"},"--import-mappings")," argument and specify the model-to-import logic as such:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"--import-mappings Pet=my.models.MyPet\n")),Object(r.b)("p",null,"Or for multiple mappings:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"--import-mappings Pet=my.models.MyPet,Order=my.models.MyOrder\n")),Object(r.b)("p",null,"or"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"--import-mappings Pet=my.models.MyPet --import-mappings Order=my.models.MyOrder\n")))}s.isMDXComponent=!0},302:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return g}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),s=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l({},n,{},e)),t},b=function(e){var n=s(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=s(t),d=a,g=b["".concat(i,".").concat(d)]||b[d]||u[d]||r;return t?o.a.createElement(g,l({ref:n},c,{components:t})):o.a.createElement(g,l({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);