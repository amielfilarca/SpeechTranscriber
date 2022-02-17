import {
  PermissionsAndroid,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import Voice from '@react-native-voice/voice'

const TranscriptionScreen = () => {
  const [isListening, setIsListening] = useState(false)
  const [results, setResults] = useState()
  const [partialResults, setPartialResults] = useState()
  const [error, setError] = useState()

  const requestRecordAudioPermission = async () => {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO
    )
  }

  const onStart = () => {
    setIsListening(true)
  }

  const onEnd = () => {
    setIsListening(false)
  }

  const onError = (error) => {
    setError(error.message)
    setIsListening(false)
  }

  const onResults = (results) => {
    setResults(results.value)
    stopTranscription()
  }

  const onPartialResults = (partialResults) => {
    setPartialResults(partialResults.value[0])
  }

  useEffect(() => {
    Voice.onSpeechStart = onStart
    Voice.onSpeechEnd = onEnd
    Voice.onSpeechError = onError
    Voice.onSpeechResults = onResults
    Voice.onSpeechPartialResults = onPartialResults

    return () => {
      Voice.destroy().then(Voice.removeAllListeners)
    }
  }, [])

  const startTranscription = async () => {
    await Voice.start()
  }

  const stopTranscription = async () => {
    await Voice.stop()
  }

  useEffect(() => {
    requestRecordAudioPermission()
  }, [])

  const speechButtonStyle = useMemo(
    () => ({
      ...styles.btnSpeech,
      ...(isListening ? styles.btnStop : styles.btnStart),
    }),
    [styles, isListening]
  )

  const speechButtonText = useMemo(
    () => (isListening ? 'Stop' : 'Start'),
    [isListening]
  )

  const onSpeechButtonPress = useCallback(() => {
    isListening ? stopTranscription() : startTranscription()
  }, [isListening])

  return (
    <View style={styles.container}>
      <View style={styles.resultTextContainer}>
        <Text style={styles.resultText}>
          {partialResults}
        </Text>
        <Text style={styles.errorText}>{error}</Text>
      </View>
      <TouchableOpacity
        style={speechButtonStyle}
        onPress={onSpeechButtonPress}
      >
        <Text style={styles.btnText}>
          {speechButtonText}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default TranscriptionScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  resultTextContainer: {
    flex: 1,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 32,
    color: 'black',
    textTransform: 'capitalize',
    justifyContent: 'center',
  },
  errorText: {
    fontSize: 24,
    color: 'red',
  },
  btnText: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  btnSpeech: {
    marginTop: 20,
    width: 250,
    height: 250,
    borderRadius: 250,
    display: 'flex',
    justifyContent: 'center',
  },
  btnStart: {
    backgroundColor: 'green',
  },
  btnStop: {
    backgroundColor: 'red',
  },
})
