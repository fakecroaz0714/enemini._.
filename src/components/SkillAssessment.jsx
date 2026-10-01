import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  RotateCcw, 
  Award, 
  Clock, 
  Check, 
  X,
  BookOpen
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { AI_ASSESSMENTS } from '../data/mockData';

export default function SkillAssessment({ user, onUpgradeSkillLevel }) {
  const [selectedTrackId, setSelectedTrackId] = useState('assess-python');
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [upgraded, setUpgraded] = useState(false);

  const activeAssessment = AI_ASSESSMENTS.find(a => a.id === selectedTrackId) || AI_ASSESSMENTS[0];
  const questions = activeAssessment.questions;
  const currentQuestion = questions[currentQIndex];

  const handleSelectOption = (optionIndex) => {
    if (isSubmitted) return;
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQIndex]: optionIndex
    });
  };

  const calculateScore = () => {
    let correctCount = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correct) {
        correctCount += 1;
      }
    });
    return Math.round((correctCount / questions.length) * 100);
  };

  const handleFinish = () => {
    setIsSubmitted(true);
    confetti({
      particleCount: 85,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setCurrentQIndex(0);
    setIsSubmitted(false);
    setUpgraded(false);
  };

  const handleApplyUpgrade = () => {
    setUpgraded(true);
    onUpgradeSkillLevel(activeAssessment.skill, 'Advanced');
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.5 }
    });
  };

  const score = isSubmitted ? calculateScore() : 0;

  return (
    <div className="assessment-page-container container">
      {/* Header */}
      <div className="assessment-header-card glass-card">
        <div className="assessment-title-area">
          <div className="badge badge-cyan animate-pulse-glow">
            <Sparkles size={14} />
            <span>AI Knowledge Validation Engine</span>
          </div>
          <h2 className="page-heading">AI Skill Assessments</h2>
          <p className="page-sub">
            Validate your mastery with interactive micro-tests. Earning high scores upgrades your verified level
            and increases your priority ranking in the AI matching algorithm.
          </p>
        </div>

        {/* Tracks Selector */}
        <div className="assessment-tracks-row">
          {AI_ASSESSMENTS.map(track => (
            <button
              key={track.id}
              className={`track-select-btn ${selectedTrackId === track.id ? 'active' : ''}`}
              onClick={() => {
                setSelectedTrackId(track.id);
                handleReset();
              }}
            >
              <BookOpen size={16} />
              <span>{track.skill}</span>
              <span className="badge badge-subtle">{track.questions.length} Questions</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Assessment Container */}
      {!isSubmitted ? (
        <div className="quiz-card glass-card">
          {/* Progress Header */}
          <div className="quiz-progress-header">
            <div className="q-counter">
              Question <strong>{currentQIndex + 1}</strong> of {questions.length}
            </div>
            <div className="quiz-progress-track">
              <div 
                className="quiz-progress-fill emerald" 
                style={{ width: `${((currentQIndex + 1) / questions.length) * 100}%` }}
              />
            </div>
            <div className="q-time-tag">
              <Clock size={14} />
              <span>~2 mins per question</span>
            </div>
          </div>

          {/* Question Text */}
          <div className="question-body">
            <h3 className="question-text">{currentQuestion.text}</h3>

            {/* Options List */}
            <div className="options-list">
              {currentQuestion.options.map((opt, idx) => {
                const isSelected = selectedAnswers[currentQIndex] === idx;
                return (
                  <button
                    key={idx}
                    className={`option-btn ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleSelectOption(idx)}
                  >
                    <span className="option-letter">{['A', 'B', 'C', 'D'][idx]}</span>
                    <span className="option-text">{opt}</span>
                    {isSelected && <CheckCircle2 size={18} className="option-check-icon" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="quiz-controls-footer">
            <button
              className="btn btn-outline"
              disabled={currentQIndex === 0}
              onClick={() => setCurrentQIndex(currentQIndex - 1)}
            >
              Previous
            </button>

            {currentQIndex < questions.length - 1 ? (
              <button
                className="btn btn-primary"
                disabled={selectedAnswers[currentQIndex] === undefined}
                onClick={() => setCurrentQIndex(currentQIndex + 1)}
              >
                <span>Next Question</span>
                <ArrowRight size={16} />
              </button>
            ) : (
              <button
                className="btn btn-primary"
                disabled={selectedAnswers[currentQIndex] === undefined}
                onClick={handleFinish}
              >
                <Sparkles size={16} />
                <span>Submit & View Results</span>
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Results View (Section 13) */
        <div className="assessment-results-card glass-card">
          <div className="results-header-hero text-center">
            <div className="score-circle-outer">
              <span className="score-percentage-num">{score}%</span>
              <span className="score-label">Final Score</span>
            </div>

            <h3 className="results-headline">
              {score >= 75 ? '🎉 Outstanding Performance!' : 'Good Effort! Keep Practicing.'}
            </h3>

            <p className="results-subtext">
              Skill: <strong>{activeAssessment.skill}</strong> • Level Reached: <strong>{score >= 75 ? 'Advanced' : 'Intermediate'}</strong>
            </p>
          </div>

          {/* Results Summary Box (Section 13 spec) */}
          <div className="spec-results-box glass-card">
            <div className="spec-row">
              <span className="spec-label">Current Level:</span>
              <span className="badge badge-indigo">Intermediate</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">Score:</span>
              <span className="spec-val-highlight">{score}%</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">Recommended Level:</span>
              <span className="badge badge-emerald">
                {score >= 75 ? 'Intermediate ➔ Advanced' : 'Beginner ➔ Intermediate'}
              </span>
            </div>
            <div className="spec-row">
              <span className="spec-label">Recommended Next Skills:</span>
              <div className="skills-tags-cluster">
                {activeAssessment.id === 'assess-python' ? (
                  <>
                    <span className="badge badge-cyan">✓ NumPy</span>
                    <span className="badge badge-cyan">✓ Pandas</span>
                    <span className="badge badge-cyan">✓ Machine Learning</span>
                    <span className="badge badge-cyan">✓ FastAPI</span>
                  </>
                ) : (
                  <>
                    <span className="badge badge-cyan">✓ Design Tokens</span>
                    <span className="badge badge-cyan">✓ Micro-interactions</span>
                    <span className="badge badge-cyan">✓ User Research</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="results-actions-row">
            <button className="btn btn-outline" onClick={handleReset}>
              <RotateCcw size={15} />
              <span>Retake Assessment</span>
            </button>

            {score >= 75 && (
              upgraded ? (
                <div className="badge badge-emerald py-2 px-4">
                  <CheckCircle2 size={16} />
                  <span>Profile Upgraded to Advanced (AI Verified)!</span>
                </div>
              ) : (
                <button className="btn btn-primary" onClick={handleApplyUpgrade}>
                  <Award size={16} />
                  <span>Apply Advanced Level to Student Profile</span>
                </button>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}
