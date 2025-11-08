import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Container, StepConnector, stepConnectorClasses, styled } from '@mui/material';
import { Check } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../app/store';
import Step1 from '../../components/steps/step1/Step1';
import Step2 from '../../components/steps/step2/Step2';
import Step3 from '../../components/steps/step3/Step3';
import { setStep } from '../../features/step/stepsSlice';
import { useEffect, useState } from 'react';
import { resetStep } from '../../features/step/stepsSlice';


const CustomConnector = styled(StepConnector)(({ }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,

  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    width: 100,
    marginRight: 50,
    marginLeft: 50,
    border: 0,
    backgroundColor: '#3a4659', // رنگ پیش‌فرض
    borderRadius: 1,
    transition: 'background-color 0.3s ease',
  },
  [`&.${stepConnectorClasses.completed} .${stepConnectorClasses.line}`]: {
    backgroundColor: '#40A578', // رنگ سبز وقتی مرحله کامل شد
  },
  [`&.${stepConnectorClasses.active} .${stepConnectorClasses.line}`]: {
    backgroundColor: '#40A578', // رنگ کانکتور در حال عبور
  },
}));

const CustomStepIconRoot = styled('div')<{ ownerState: { active?: boolean; completed?: boolean } }>(
  ({ ownerState }) => ({
    backgroundColor:
      ownerState.active || ownerState.completed ? '#40A578' : '#3a4659', // ✅ هر دو یک رنگ آبی
    zIndex: 1,
    color: '#fff',
    width: 35,
    height: 35,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 600,
    transition: 'all 0.3s ease',
  })
);

function CustomStepIcon(props: any) {
  const { active, completed, icon, hideTicks } = props;

  return (
    <CustomStepIconRoot ownerState={{ active, completed }}>
      {completed && !hideTicks ? <Check sx={{ fontSize: 20 }} /> : icon}
    </CustomStepIconRoot>
  );
}

export default function Home() {
  const steps = [' Exchange', 'Confirm', 'Complete'];

  const [hideTicks, setHideTicks] = useState(false);

  const step = useSelector((state: RootState) => state.steps)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(resetStep())
  }, [])

  const backHandler = (index: number) => {
    if (step.step > index) {
      dispatch(setStep(index))
    }
  }


  return (
    <Container maxWidth='lg'>
      <Box sx={{ width: '100%', mt: '75px' }}>
        <Stepper
          activeStep={step.step}
          connector={<CustomConnector />}
          sx={{
            backgroundColor: '#2A3342',
            px: '231px',
            height: '100px',
            borderRadius: '30px',
          }}
        >
          {steps.map((label, index) => {
            const isActiveOrPassed = step.step >= index;
            const isActive = step.step > index
            const stepProps: { completed?: boolean } = {};
            const labelProps: {
              optional?: React.ReactNode;
            } = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel
                  onClick={() => backHandler(index)}
                  {...labelProps}
                  StepIconComponent={(props) => (
                    <CustomStepIcon {...props} hideTicks={hideTicks} />
                  )}
                  sx={{
                    cursor: isActive ? 'pointer' : '-moz-grab',
                    '& .MuiStepLabel-label': {
                      color: isActiveOrPassed ? '#40A578 !important' : '#9ca3af',
                      fontWeight: isActiveOrPassed ? 'bold' : 'normal',
                      transition: 'all 0.3s ease',
                    },
                  }}
                >
                  {label}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {step.step == 0 ? <Step1 /> : step.step == 1 ? <Step2 /> : step.step == 2 && <Step3 setHideTicks={setHideTicks} />}




      </Box>
    </Container>
  );


}
