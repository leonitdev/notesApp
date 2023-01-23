# Notes App

This project aims to be a strong foundation for writing Notes. It provides a clear and organized structure, with a dynamic layout, and Notes that can contain the needed details, like title, description, picture, and tag.

# Covering Functions

1. Register User
2. Create Notes
3. List Notes
4. Search in Notes by title or description
5. Filter Notes by tags
5. Delete Notes
6. List notes in grid or column format
7. Create Tags
8. List Tags
9. Remove Tags


# Base dependencies

1. localStorage for saving data on AsyncStorage.
2. react-navigation navigation library.
3. redux for state management.
4. redux-toolkit for better readable code.
5. createAsyncThunk to dispatch asynchronous actions.
6. imagePicker for being able to select photos from gallery
7. toastMessage for showing message when tasks are performed successfully.
8. dropdown picker for picking a tag in dropdown when creating a Note.
9. react-native-vector-icons for using descriptfull icons for better UI & UX.

# Folder structure

1. *. src: This folder is the main container of all the code inside your application
  2. components: Folder to store any common component that you use through your app (such as a generic button or input or common component)
  3. constants: Folder to store any kind of constant that you have.
  4. navigation: Folder to store the navigators
  5. screens: Folder that contains all your application screens/features
  6. interface: Folder that contains main types of your application
  7. redux: Folder that contains all redux files, including actions, reducers, selectors.
  8. services: Folder that contains all your application services, for GET, POST, DELETE, FILTER data from storage.

# Prerequisites to run the app

1. Node.js > 14 and npm (Recommended: Use nvm)
2. Cocoapods 1.15.3

# Steps to run the app

1. git clone https://github.com/leonitdev/notesApp.git
2. Go to project's root folder and run npm install.
3. go to ios folder and write "pod install"
4. go back to the root with command "cd .."
5. run the app with command "react-native run-ios"