import {Alert, Button, StyleSheet} from 'react-native';
import React from 'react';


const Put = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const handlePost = async () => {
    setIsLoading(true);
    try {
      const responseInfo = await fetch(
        `https://dummy.restapiexample.com/api/v1/update/21`,
        {
          method: 'PUT',
          // headers: {
          //   'Content-Type': 'application/json',
          //   Authorization: `Bearer ${token}`,
          // },
          // body: JSON.stringify({
          //   username: 'JohnDoe',
          //   email: 'mailto:johndoe@example.com',
          //   password: 'secretpassword',
          // }),
        },
      );

      console.log('responseInfo', responseInfo);
      // responseInfo?.status === 201  && 
      //   Alert.alert('Success', 'Successfully Creted.');
        responseInfo?.status === 200  && 
        Alert.alert('Success', 'Successfully Creted.');
    } catch (error) {
      console.log('handelPaymentResponseErr', error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    // <Get/>
    <Button title={isLoading ? 'Loading' : 'POST'} onPress={handlePost} />
  );
};

export default Put;

const styles = StyleSheet.create({});
