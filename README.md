# React Native Yaş Artırma/Azaltma Uygulaması

Bu, kullanıcıların bir yaş değerini artırıp azaltmalarına olanak tanıyan basit bir React Native uygulamasıdır. Uygulama bir isim ve yaş görüntüler ve yaş değerini artırmak veya azaltmak için düğmeler içerir.

## Özellikler

- Bir isim ve yaş görüntüleme.
- "+" düğmesine basarak yaşı artırma.
- "-" düğmesine basarak yaşı azaltma (minimum yaş 0 olacak şekilde).

### Kurulum

1. Depoyu klonlayın:
   ```sh
   git clone https://github.com/kullaniciadi/proje-adi.git
   cd proje-adi
   ```

2. Bağımlılıkları yükleyin:
   ```sh
   npm install
   # veya
   yarn install
   ```

### Uygulamayı Çalıştırma

Uygulamayı Expo kullanarak başlatabilirsiniz:

```sh
npm start
# veya
yarn start
```

Bu, geliştirme sunucusunu başlatacak ve tarayıcınızda Expo Geliştirici Araçlarını açacaktır. Android/iOS emülatöründe veya fiziksel cihazınızda Expo Go uygulamasını kullanarak uygulamayı çalıştırabilirsiniz.

## Kod Açıklaması

### Bileşenler

- `App`: Uygulamanın ana bileşeni.

### Durum Yönetimi

- `useState`: İsim ve yaş için durumu yönetmek üzere kullanılan React hook'u.

### Stil

Stiller, uygulamanın düzeni ve görünümünün tutarlı olmasını sağlamak için `StyleSheet.create` kullanılarak tanımlanmıştır.

### Kod

```javascript
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState("Derya Gülmez");
  const [age, setAge] = useState(21);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ad: {name}</Text>
      <Text style={styles.text}>Yaş: {age}</Text>
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={() => setAge(age + 1)} color="black" />
        <View style={styles.buttonSpacer} />
        <Button title="-" onPress={() => setAge(Math.max(0, age - 1))} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonSpacer: {
    width: 20,
  },
});
```
