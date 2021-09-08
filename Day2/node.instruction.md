
# List all version of library
- Use this command to see all version specifically:
```
npm show <name_library>@* version
```
# Install Package:
## with specific version:
```
npm i <name_library>@version
```
## with lasted:
```
npm i <name_library>
```
_Note that you can use prefix ```--save-dev``` to write to package.json that information of package_

# Uninstall package:
## Unscoped package
```
npm uninstall --save <package_name>
```
Example:
```
npm uninstall --save lodash
```

## Scoped package
```
npm uninstall --save <@scope/package_name>
```

_Note: If you installed a package as a "devDependency" (i.e. with ```--save-dev```), use ```--save-dev``` to uninstall it:_

## Uninstalling global packages

```
npm uninstall -g <package_name>
```
