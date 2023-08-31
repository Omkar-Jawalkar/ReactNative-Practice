import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Avatar, Flex, ScrollView, Text} from 'native-base';

export default function ContactList() {
  const [contacts, setContacts] = useState(new Array(10).fill(0));

  return (
    <>
      <Text ml="2" bold color="light" fontSize="3xl">
        Contact List
      </Text>
      <ScrollView h={200}>
        <Flex direction="column">
          {/* This is the Card */}
          {contacts.map(() => {
            return (
              <Flex
                mx={4}
                my={2}
                p={4}
                rounded={'md'}
                direction="row"
                backgroundColor={'muted.800'}>
                <Avatar
                  size={'md'}
                  source={{uri: 'https://picsum.photos/id/237/200/300'}}
                />

                <Flex ml="3">
                  <Text color="light.100" fontSize={'md'}>
                    Omkar Jawalkar
                  </Text>
                  <Text color="secondary.100" fontSize={'xs'}>
                    I love to play Chess ♟️
                  </Text>
                </Flex>
              </Flex>
            );
          })}
        </Flex>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
