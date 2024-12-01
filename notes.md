## **Basics**

public contains
1) fav.icon (icon on tab of website)
2) used to store the static files (like videos)

## files at the root directory
1) tsconfig files (to configure ts compilation, do not touch unless familiar with ts compilation to js code)
2) package files, all dependencies in the projects
3) angular.json extra configuration with angular cli
 
4) src folder contains all angular code that you will write 
5) main.ts entry file that is first file that is executed 

## Commands to create angular project
npm install -g @angular/cli
ng new project-name
cd project-name
ng serve
(npm install automatically run by ng new project-name)


## Decorator
To add extra metadata

@Component imported from angularcli

@Component({
selector: 'app-root', //tells which html tag to substitute with this component \
standalone: true, \
imports: [RouterOutlet],
templateUrl: './app.component.html', //contains markup for this custom html component \
styleUrl: './app.component.css' //tells the styles for this component \
})

for **selector** it is important to name first_word-html_tag_name because it can clash with defined hmtl tags \
**Example** \
selector : ~~header~~ \
selector : **app-header** 


~~~
## How to create component 
contains 3 files: css, html, and ts(containing component)


### **Component will not appear even if you do proper html tag in index.html**\
You need to import component in main.ts, and pass to bootstrapApplication(Component_Name) \
### However, bootstrapApplication creates a whole tree where data cannot be passed between trees 
### **Instead, create component with appcomponent that serves as a tree where data can be shared between components declared in it** \
### THEN REGISTER IT IN app.component.ts, by adding it to import with @component of app.component.ts
### AND Adding custom html-tag there** 
~~~


### STYLES CSS is used for global css (for tags that are not component specific ones)

### IF Image is not loaded, just restart project because it can be cashed sometimes



### To create component via angular cli you need to run
```
ng g c user
```

### FOR Binding 2 ways
userComponet{
name = Akmal
}

WITHIN HTML

{{name}} //string interpolation 
OR 
[src] = "name" //property binding 


### Signals updating in more granular way
```
selectedUser = signal(DUMMY_USERS[randomIndex]);
selected().name //to get
selected.set("New Value") //setter

imagePath = computed(() => 'assets/user/' + this.selectedUser().avatar) //computes only if signal used inside of it

name = input<string>(); //inputs with signals without decorators acts like props
avatar = input.required<string>(); //they are readonly , cannot use avatar.set()

imagePath = computed<string>( () => {
   return "assets/users/" + this.avatar()
})
```

