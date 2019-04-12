# Uglify ES for Web

## Install

```
npm i uglify-es-web
```


## Usage

```javascript 1.8
    //import
    import UglifyEs from 'uglify-es-web';
    //or
    const UglifyEs=require('uglify-es-web');
```

```javascript 1.8
    //parser
    const parse=UglifyEs.parse(`const hello = 'world'`);
```

```javascript 1.8
    //print to code
    const code = parse.print_to_string({beautify:true});
```



## Example



