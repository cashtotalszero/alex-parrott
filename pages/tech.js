import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { fetchSkills as fetchSkillAction } from '../actions';

import { CODE_REPO } from '../constants/urls';
import { SMILING_FACE, HALO as HALO_FACE, FLUSHED_FACE } from '../constants/emojis';
import { SKILL_LEVELS } from '../constants/skills';

import Emoji from '../components/Emoji';
import Table from '../components/Table';
import CustomHead from '../components/CustomHead';
import Card from '../components/Card';
import LoadingSpinner from '../components/LoadingSpinner';
import TextBlock, { LINK } from '../components/TextBlock';
import Modal from '../components/SkillsModal';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  position: relative;
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const TechPage = ({ fetchSkills, skills, isLoading, hasError }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const columnDefs = [
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Type',
      accessor: 'type',
    },
    {
      Header: 'Skill level',
      accessor: 'level',
      Cell: ({ value }) => {
        switch (value) {
          case SKILL_LEVELS.HALO:
            return <Emoji unicode={HALO_FACE} label="Smiling face with halo" />;
          case SKILL_LEVELS.SMILE:
            return <Emoji unicode={SMILING_FACE} label="Smiling face" />;
          case SKILL_LEVELS.FLUSHED:
            return <Emoji unicode={FLUSHED_FACE} label="Flushed face" />;
          default:
            return <Emoji unicode={SMILING_FACE} label="Smiling face" />;
        }
      },
    },
    {
      Header: 'Keywords',
      accessor: 'keywords',
    },
  ];

  useEffect(() => {
    if (!skills.length) {
      fetchSkills();
    }
  }, []);

  const showTable = !isLoading && !hasError && !!skills.length;
  const showSpinner = isLoading && !hasError;

  return (
    <Container>
      <CustomHead />

      <Card maxWidth="950px">
        <h1>Tech I use</h1>

        {!hasError && (
          <>
            <p>
              Got a project that needs an engineer? I might be able to help. Search here for some of the technologies
              that I know.
            </p>
            <p>
              {'Skill levels are described using the highly scientific '}
              <Link href="/tech">
                <a onClick={() => setIsOpen(true)}>emoji scale</a>
              </Link>
              .
            </p>
            <Modal isOpen={modalIsOpen} setIsOpen={() => setIsOpen(false)} />
          </>
        )}

        {showSpinner && (
          <SpinnerWrapper>
            <LoadingSpinner size={25} isLoading={isLoading} />
          </SpinnerWrapper>
        )}

        {showTable && (
          <Table columnDefs={columnDefs} tableData={skills} initialState={{ hiddenColumns: ['keywords'] }} />
        )}

        {hasError && (
          <TextBlock
            contents={[
              {
                text:
                  'Hmm... There is a problem loading this page. Try refreshing the page or check out the code for yourself ',
              },
              { type: LINK, text: 'here', href: CODE_REPO },
              { text: '.' },
            ]}
          />
        )}
      </Card>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  skills: state.skills.data,
  isLoading: state.skills.isLoading,
  hasError: state.skills.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSkills: () => {
    dispatch(fetchSkillAction());
  },
});

TechPage.propTypes = {
  fetchSkills: PropTypes.func.isRequired,
  hasError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  skills: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TechPage);
