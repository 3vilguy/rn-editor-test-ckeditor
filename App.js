import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CKEditor from 'react-native-ckeditor';

export default function App() {
  return (
    <CKEditor
      style={styles.container}
      content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis ex felis. Duis vitae facilisis dui, posuere dapibus ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin odio dolor, pharetra nec eros eget, congue vestibulum nulla. Vestibulum pretium dignissim velit. Cras mattis fermentum velit, et pulvinar arcu molestie sed. Ut vitae lectus quis tellus suscipit rhoncus nec vitae urna. Integer lacinia nisl in tortor vulputate sodales. Cras efficitur accumsan odio luctus eleifend. Nam ut ex quis nulla egestas feugiat. Maecenas placerat sollicitudin posuere. Curabitur dolor nibh, volutpat a porta et, pharetra sodales lectus. Donec dapibus sollicitudin faucibus. Vestibulum placerat vel lacus fermentum consectetur. Phasellus non condimentum sem."}
      onChange={value => {
        console.log("Value", value);
        // setFieldValue('description', value);
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});
