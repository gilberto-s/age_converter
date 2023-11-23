import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Loading from './loading';
import { calculate } from '../services/apis/timeConverter';

const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

function ConvertForm() {
  const { 
    register, 
    handleSubmit, 
    reset, 
    formState, 
    formState: { errors } 
  } = useForm({ defaultValues: { seconds: '', type: '' } });
  const [isLoading, setIsLoading] = useState(false);
  const [convertedData, setConvertedData] = useState(null);

  const toggleLoading = (status) => setIsLoading(status);
  
  const onSubmit = async (data) => {
    toggleLoading(true);
    try {
      const result = await calculate(formatData(data));
      if(!!result) setConvertedData(result);
    } catch (error) {
      alert('An error ocurred\n' + JSON.stringify(error));
    } finally {
      toggleLoading(false);
    }
  };

  const formatData = (data) => {
    return {
      seconds: parseInt(data.seconds),
      type: data.type
    }
  }

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ seconds: '', type: '' })
    }
  }, [formState, reset])
  
  return (
    <div className='form-box'>
      {isLoading && <Loading />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Seconds</label>
        <input type="text" {...register("seconds", { required: true, pattern: /^\d+$/ })} />
        {errors.seconds && <p>Seconds is required and must be valid</p>}
        
        <label>Type</label>
        <select {...register("type", { required: true })}>
          {planets.map(p => (
            <option value={p}>{p}</option>
          ))}
        </select>
        {errors.type && <p>Type is required</p>}
        
        <button type="submit">Submit</button>
      </form>
      <div className='result-box'>
        {convertedData && (
          <>
            <h2>{convertedData?.output?.calc} {convertedData?.input?.planet?.type + '-years-old'}</h2>
          </>
        )}
      </div>
    </div>
  );
}

export default ConvertForm;